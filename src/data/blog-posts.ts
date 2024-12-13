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
    id: "Championing the Rights",
    title: "Championing the Rights of Women and Girls with Disabilities",
    excerpt: "16 Days of Activism Against Gender-Based Violence.",
    content: "Women and girls with disabilities face a double burden when it comes to gender-based violence. Not only are they at a higher risk of experiencing physical, emotional, and sexual abuse, but societal discrimination, lack of accessibility, and inadequate support systems further heighten their vulnerability. The procession in Kibera highlighted these challenges through banners and placards that proclaimed, 'No More Violence and Support Survivors'. It underscored the importance of creating inclusive, supportive environments that prioritize the safety and well-being of all women and girls, including those with disabilities. The event offered powerful moments of solidarity and support, including community engagement booths that provided valuable information about available resources for GBV survivors. Organizations such as Coptic Hospital and CREAW shared critical details on how to report violence, access shelters, and obtain medical, legal, and psychological support, ensuring that women and girls with disabilities know they are not alone. Performances by local youth groups, including skits and poetry, powerfully illustrated the emotional, physical, and psychological toll of GBV, while music and dance celebrated resilience and unity. A poignant moment came when participants observed a silence in honor of those who lost their lives to gender-based violence, emphasizing the ongoing need to protect and support survivors, particularly those with disabilities. Local leaders, including the chief guest, the director from the Ministry of Labor, reiterated the importance of stronger laws, better support systems, and a commitment to creating inclusive spaces that address the unique needs of women and girls with disabilities. Despite some logistical challenges—such as traffic disruptions and weather conditions—the event was a success, with significant community participation. However, the absence of key government representatives limited the visibility of the campaign. Moving forward, organizers recommend enhanced coordination with traffic and security teams, broader outreach to engage more stakeholders, and the use of online platforms to amplify the message of the campaign. The 16 Days of Activism event in Kibera was a crucial reminder that gender-based violence is a societal issue that requires collective action. It provided an opportunity to reflect on the often-overlooked struggles of women and girls with disabilities, who face unique barriers to safety and support. As we continue this campaign, it is essential to advocate for stronger policies, increased funding, and more accessible services to ensure that the voices of women and girls with disabilities are heard, their rights respected, and their needs met. Together, we can build a future where every woman and girl—regardless of disability—can live free from violence, discrimination, and oppression.",
    author: {
      name: "kenneth",
      avatar: "./images/kenneth-avatar.jpg",
      role: "Founder & Para Triathlete"
    },
    coverImage: "./images/slider-2.png",
    date: "2024-12-12",
    readTime: 5,
    tags: ["Para Sports", "Empowerment", "Athletics"]
  },
  {
    id: "Celebrating the International Day of Persons with Disabilities",
    title: "Celebrating the International Day of Persons with Disabilities",
    excerpt: " A Call for Inclusion and Empowerment.",
    content: "On December 3rd, 2024, the world came together to observe the International Day of Persons with Disabilities (IDPD), a day dedicated to promoting awareness and support for the rights and well-being of individuals with disabilities. Established by the United Nations in 1992, IDPD serves as a global reminder of the importance of creating inclusive, accessible environments that remove barriers for persons with disabilities (PWDs), ensuring their full participation in society.", 
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
 
];