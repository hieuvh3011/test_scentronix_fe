const environment = Object.freeze({
  base_url: process.env.NEXT_PUBLIC_BASE_URL as string,
  thomsonpass_internal_url: process.env.NEXT_PUBLIC_THOMSONPASS_INTERNAL_URL as string,
  hms_url: process.env.NEXT_PUBLIC_HMS_URL as string,
  hmac: process.env.NEXT_PUBLIC_HMAC_SECRET_KEY as string,
  encryption_key: process.env.NEXT_PUBLIC_ENCRYPTION_SECRET_KEY as string,
  iv_key: process.env.NEXT_PUBLIC_ENCRYPTION_SECRET_IV as string,
} as const);

export default environment;
