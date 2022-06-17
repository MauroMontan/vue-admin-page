import { defineStore } from "pinia";
import { Project } from "../interfaces";


export const useProject = defineStore("project store", {
  state: () => ({
    projects: [
      {
        title: "Maurndown editor",
        video: "",
        description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpIM8JZvNWwTdGhRC8MyLRWuGNp4XOucr5OSdWg-pJ96lBPq1D5O7ih3DztEJS0NFrzK6gJ8w5_K3D-fZOAwpjPZy4qjPZO7nxEb6EAv0P2W17mQAYlET4lAMQjS9eE-q-QWQ8VsIY6xbCb4Jkczuus8Zb2uqHbawBXcQi6dtRjSef7Kn6-43WZXo_2w/s1920/onepiecehbomax.jpg",
        tools: ["typescript", "vue", "markedjs"],
      },
      {
        title: "Maurndown editor",
        video: "",
        description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpIM8JZvNWwTdGhRC8MyLRWuGNp4XOucr5OSdWg-pJ96lBPq1D5O7ih3DztEJS0NFrzK6gJ8w5_K3D-fZOAwpjPZy4qjPZO7nxEb6EAv0P2W17mQAYlET4lAMQjS9eE-q-QWQ8VsIY6xbCb4Jkczuus8Zb2uqHbawBXcQi6dtRjSef7Kn6-43WZXo_2w/s1920/onepiecehbomax.jpg",
        tools: ["typescript", "vue", "markedjs"],
      },
    ] as Array<Project>,
    project: {
      title: "",
      description: "",
      image: "",
      tools: [],
      video: "",
    } as Project
  }),
  getters: {
    projectList: (state) => state.projects,
  },
  actions: {
    setCurrentProject(payload: Project): void {
      this.project = payload;
    },

    emptyProject(): void {
      this.project = {
        title: "",
        description: "",
        image: "",
        tools: [],
        video: "",
      } as Project;
    }
  }
});

