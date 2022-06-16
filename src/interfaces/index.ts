
export interface Project {
  title: string,
  image?: string,
  video?: string;
  description: string,
  tools?: Array<string>,
}

export interface Skill {
  logo: string;
  name: string;
  description: string;
}



export interface Network {
  name: string,
  url: string,
}


export interface AvatarFrame {
  image: string,
  draw: string,
  model: string,
}

export interface User {
  name: string,
  email: string,
  avatar_pictures: AvatarFrame,
  description: string,
  skills: Array<Skill>,
  social_networks: Array<Network>,
  projects?: Array<Project>
}
