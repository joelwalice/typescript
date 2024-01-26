import { CollectionConfig } from "payload/types";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { FaHighlighter } from 'react-icons/fa'; // Import the FaHighlighter icon from react-icons/fa

// Define the collection configuration
const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures}) => [
          ...defaultFeatures,
          // renderMarkButton({
          //   name: 'highlight',
          //   icon: FaHighlighter, // Use the FaHighlighter icon
          //   title: 'Highlight',
          //   toggle: ({ editor }) => editor.toggleMark('highlight'), // Toggle the 'highlight' mark
          //   isActive: ({ editor }) => editor.isActive('highlight'), // Check if 'highlight' mark is active
          // }),
        ]
      }),
    },
  ],
};

export default Posts;
