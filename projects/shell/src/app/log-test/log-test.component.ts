import { Component } from "@angular/core";
import { LogService } from "../shared/log.service";

@Component({
    selector: "app-log-test",
    templateUrl: "./log-test.component.html"
})
export class LogTestComponent {
    constructor(private logger: LogService) {
    }

    testLog(): void {
        // this.logger.log("Test the `log()` Method");
        this.logger.log("Test 2 Parameters", "Paul", "Smith");

        this.logger.debug("Test Mixed Parameters", true, false, "Paul", "Smith");

        let values = ["1", "Paul", "Smith"];
        this.logger.warn("Test String and Array", "Some log entry", values);

    }
}
