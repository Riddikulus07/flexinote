# FlexiNote

FlexiNote is a beautifully crafted note-taking application built with Next.js, leveraging the power of Convex as the backend ORM and Clerk for seamless authentication. With an intuitive user interface and a rich-writing experience, FlexiNote empowers users to organize their thoughts, ideas, and tasks effortlessly.

## Features

- **Realtime Editing**: Collaborate with others in real-time on your notes, making it perfect for team projects or group brainstorming sessions.

- **Seamless UI**: Experience a visually stunning and intuitive user interface designed to enhance productivity and user satisfaction.

- **BlockNote Editor**: Enjoy the flexibility and versatility of the BlockNote Editor, allowing you to structure your notes precisely the way you want.

- **Publishing**: Share your notes with others by publishing them, making them accessible to anyone who wants to read or use them.

- **Infinite Nesting**: Utilize the power of recursive functions to create an infinite number of child notes within parent documents, enabling you to organize your thoughts hierarchically.

- **Effortless Deletion**: Easily manage your notes with a seamlessly integrated deletion feature, ensuring that your workspace remains clutter-free.

- **Rich-Writing Experience**: Immerse yourself in a rich-writing experience, complete with formatting options, media embedding, and more, making note-taking a pleasure.

## Technologies Used

- Next.js: A powerful React framework for building server-side rendered applications.
- Convex: A backend ORM providing a robust data management layer.
- Clerk: A user authentication solution offering secure and easy-to-use authentication features.
- Edge-Store: A file storage solution for handling file uploads seamlessly.
- BlockNote Editor: A versatile and customizable editor for structuring your notes effectively.

## Installation

To get started with FlexiNote, follow these simple steps:

1. Clone the repository:

```
git clone <repository_url>
```

2. Install dependencies:

```
npm install
```

3. Set up Convex:
   - Set up your Convex instance following the instructions provided in the Convex documentation.
   - Store your Convex API key securely in the `.env.local` file:

   ```
   CONVEX_API_KEY=your_convex_api_key
   ```

4. Set up Clerk:
   - Set up your Clerk instance following the instructions provided in the Clerk documentation.
   - Store your Clerk API key securely in the `.env.local` file:

   ```
   CLERK_API_KEY=your_clerk_api_key
   ```

5. Set up Edge-Store:
   - Set up your Edge-Store instance following the instructions provided in the Edge-Store documentation.
   - Store your Edge-Store API key securely in the `.env.local` file:

   ```
   EDGE_STORE_API_KEY=your_edge_store_api_key
   ```

6. Start the development server:

```
npm run dev
```

7. Access FlexiNote in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Whether you want to report a bug, request a feature, or submit a pull request, your input is appreciated. Please refer to our [Contribution Guidelines](CONTRIBUTING.md) for more information.



Happy Note-Taking with FlexiNote! 📝✨