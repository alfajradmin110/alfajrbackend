export default ({ env }: { env: (key: string) => string }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
      jwtManagement: 'refresh',
      sessions: {
        httpOnly: true,
      },
    },
  },
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
  'tiptap-editor': {
    config: {
      presets: {
        standard: {
          bold: true,
          italic: true,
          // Highlight-start
          table: true, // Enables the main Table creation utility
          // Highlight-end
          image: true,
        },
      },
    },
  },
});