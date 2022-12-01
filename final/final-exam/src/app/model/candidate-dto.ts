import {CandidateType} from './candidate-type';

export interface CandidateDto {

  candidateId?: number;
  name?: string;
  dateOfBirth?: string;
  address?: string;
  phone?: string;
  typeName: string;
}
