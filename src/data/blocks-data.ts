interface Block {
  id: string
  title: string
  description: string
  image?: string
  link: string
}

const Blocks: Block[] = [
  {
    id: "1",
    title: "Features",
    description:
      "Blocks of Features are arranged to create a cohesive and visually appealing design.",
    image: "/images/corporate/features.png",
    link: "/corporate/features",
  },
  {
    id: "2",
    title: "About",
    description:
      "Blocks of About are arranged to create a cohesive and visually appealing design.",
    image: "/images/corporate/about.png",
    link: "/corporate/about",
  },
  {
    id: "3",
    title: "Contact",
    description:
      "Blocks of Contact are arranged to create a cohesive and visually appealing design.",
    image: "/images/corporate/contact.png",
    link: "/corporate/contact",
  },
  {
    id: "4",
    title: "Call to Action",
    description:
      "Blocks of Call to Action are arranged to create a cohesive and visually appealing design.",
    image: "/images/corporate/call-to-action.png",
    link: "/corporate/call-to-action",
  },
  {
    id: "5",
    title: "Blog",
    description:
      "Blocks of Blog are arranged to create a cohesive and visually appealing design.",
    image: "/images/corporate/blog.png",
    link: "/corporate/blog",
  },
]

export default Blocks
