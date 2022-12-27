import { makeAutoObservable } from "mobx";
import JobInterface from "modules/interfaces/jobInterface";
import { jobs } from "modules/pages/MyJobs/utils";

class Jobs {
  public jobs: JobInterface[];
  public currentJob: JobInterface | null;

  constructor() {
    makeAutoObservable(this);
    this.jobs = jobs;
    this.currentJob = null;
  }

  setCurrentJob = (job: JobInterface | null) => {
    this.currentJob = job;
  };
}

export default new Jobs();
