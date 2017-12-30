import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pm-product-ratings',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: string;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        const starPercentage = (this.rating / 5) * 100;

        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        this.starWidth = starPercentageRounded;
    }

    OnClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating}, was clicked!`);
    }
}
