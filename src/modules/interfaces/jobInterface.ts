interface JobInterface {
  id: number;
  name: string;
  description: string;
  duration: string;
  position: string;
  link: string;
  logo: string;
  responsibilities?: string[];
}

export default JobInterface;
