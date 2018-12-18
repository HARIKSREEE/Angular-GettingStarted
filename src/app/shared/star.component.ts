import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    // rating: number = 4;
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string>
        = new EventEmitter<string>();

    ngOnChanges(): void {

        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {

        // console.log(`You have clicked the ${this.rating} rating`);

        this.ratingClicked.emit(`You have clicked the ${this.rating} rating`);
    }
}