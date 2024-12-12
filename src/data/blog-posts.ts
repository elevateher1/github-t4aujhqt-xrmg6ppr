export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  coverImage: string;
  date: string;
  readTime: number;
  tags: string[];

}


export const blogPosts: BlogPost[] = [
  {
    id: "empowering-through-sports",
    title: "Empowering Women Through Para Sports: A Journey of Resilience",
    excerpt: "Discover how para sports are transforming lives and building confidence in women with disabilities.",
    content: "Para sports have emerged as a powerful tool for empowerment...",
    author: {
      name: "Grace ",
      avatar: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=150",
      role: "Founder & Para Triathlete"
    },
    coverImage: "./slider-2",
    date: "2024-03-15",
    readTime: 5,
    tags: ["Para Sports", "Empowerment", "Athletics"]
  },
  {
    id: "climate-justice",
    title: "Climate Justice: Including Voices of Women with Disabilities",
    excerpt: "How we're ensuring women with disabilities are part of the climate conversation.",
    content: "Climate change affects everyone, but its impact on women with disabilities...",
    author: {
      name: "Mary Kimani",
      avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=150",
      role: "Climate Advocate"
    },
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    date: "2024-03-10",
    readTime: 4,
    tags: ["Climate Justice", "Advocacy", "Sustainability"]
  },
  {
    id: "community-support",
    title: "Building Strong Support Networks: The Power of Community",
    excerpt: "Learn about our initiatives to create lasting support systems for women with disabilities.",
    content: "Strong community support is essential for empowerment...",
    author: {
      name: "Sarah Odhiambo",
      avatar: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=150",
      role: "Community Leader"
    },
    coverImage: "https://images.unsplash.com/photo-1596726038406-f8461c4f7f9f?auto=format&fit=crop&q=80",
    date: "2024-03-05",
    readTime: 6,
    tags: ["Community", "Support", "Empowerment"]
  }
];