import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

@Injectable({
  providedIn: "root",
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: "1",
        text: "Generated Component",
        date: new Date("12/03/2002 12:33:44"),
      },
      {
        id: "2",
        text: "Added Login",
        date: new Date("03/02/2019 02:43:44"),
      },
      {
        id: "3",
        text: "Fixed Bugs",
        date: new Date("12/03/2002 12:33:44"),
      },
    ];
  }

  getLogs() {
    return this.logs;
  }
}