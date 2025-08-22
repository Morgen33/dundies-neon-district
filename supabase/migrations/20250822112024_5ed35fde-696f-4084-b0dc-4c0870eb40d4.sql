-- Fix security warnings from previous migration

-- Remove the problematic view and policy, use a simpler approach
DROP VIEW IF EXISTS public.public_profiles;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;

-- Update the function to set search_path
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
SET search_path = public
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