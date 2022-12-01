import {CandidateType} from './candidate-type';

export interface Candidate {

  candidateId?: number;
  name?: string;
  dateOfBirth?: string;
  address?: string;
  phone?: string;
  candidateType: CandidateType;
}
