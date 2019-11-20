import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Patient } from '../patient/patient-form/patient-form.component';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiURL = 'https://xnjqfhcl7l.execute-api.us-east-1.amazonaws.com/dev/pacients';

  constructor(private http: HttpClient) { 
    
  }

  getPatients(){
    return this.http.get(this.apiURL);
  }

  deletePatient(patient: Patient){
    return this.http.delete(this.apiURL + patient.id);
  }

  postPatient(patient: Patient) {
    return this.http.post(this.apiURL, patient);
  }
}
