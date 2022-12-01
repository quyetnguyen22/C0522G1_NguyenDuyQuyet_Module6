import {CandidateDto} from './candidate-dto';

export interface InterviewInfo {
  id?: number;
  schedule?: string;
  name?: string;
  comment?: string;
  results?: string;
  proposalSalary?: number;
  times?: number;
  candidateDto?: CandidateDto;
}
