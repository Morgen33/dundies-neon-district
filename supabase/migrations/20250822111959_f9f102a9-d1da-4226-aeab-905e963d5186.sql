-- Fix security vulnerability: Restrict profile access and create public view

-- Update the SELECT policy to only allow users to see their own profiles
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Create a secure public view for service directory that only exposes non-sensitive information
CREATE OR REPLACE VIEW public.public_profiles AS
SELECT 
  id,
  user_id,
  display_name,
  bio,
  service_type,
  location,
  website_url,
  avatar_url,
  is_service_provider,
  created_at,
  updated_at
FROM public.profiles
WHERE is_service_provider = true;

-- Enable RLS on the view (inherits from base table)
ALTER VIEW public.public_profiles SET (security_barrier = true);

-- Create policy for public view - anyone can read service provider info
CREATE POLICY "Public profiles are viewable by everyone"
ON public.profiles
FOR SELECT
USING (is_service_provider = true AND (
  user_id IN (
    SELECT user_id FROM public.profiles WHERE is_service_provider = true
  )
));

-- Actually, let's simplify - create a function to get public profile data
CREATE OR REPLACE FUNCTION public.get_public_profiles()
RETURNS TABLE(
  id uuid,
  user_id uuid,
  display_name text,
  bio text,
  service_type text,
  location text,
  website_url text,
  avatar_url text,
  is_service_provider boolean,
  created_at timestamptz,
  updated_at timestamptz
)
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT 
    id,
    user_id,
    display_name,
    bio,
    service_type,
    location,  
    website_url,
    avatar_url,
    is_service_provider,
    created_at,
    updated_at
  FROM public.profiles
  WHERE is_service_provider = true;
$$;