import { defineStore } from "pinia";
import { Project } from "../interfaces";


export const useProject = defineStore("project store", {
  state: () => ({
    projects: [
      {
        title: "p2",
        description: "",
        video: "",
        image: "",
        tools: [],
      },
    ] as Array<Project>,
    project: {} as Project
  }),
  getters: {
    projectList: (state) => state.projects,
  },
  actions: {
    setCurrentProject(payload: Project): void {
      this.project = payload;
    }
  }
});

