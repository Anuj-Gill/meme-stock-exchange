
-- Insert bot users
INSERT INTO users (
  supabase_id,
  name,
  email,
  gender,
  refresh_token,
  provider,
  avatar_url
) VALUES
  (
    gen_random_uuid(),
    'Aggressive Bot',
    'bot-aggressive-001@meme-stock-exchange.local',
    'other',
    'bot-refresh-token-aggressive',
    'system',
    NULL
  ),
  (
    gen_random_uuid(),
    'Conservative Bot',
    'bot-conservative-001@meme-stock-exchange.local',
    'other',
    'bot-refresh-token-conservative',
    'system',
    NULL
  ),
  (
    gen_random_uuid(),
    'Random Bot',
    'bot-random-001@meme-stock-exchange.local',
    'other',
    'bot-refresh-token-random',
    'system',
    NULL
  );

-- Query to retrieve bot user IDs (run this after inserting to get the UUIDs)
SELECT supabase_id, name, email 
FROM users 
WHERE email LIKE 'bot-%@meme-stock-exchange.local'
ORDER BY name;
