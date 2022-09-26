import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input() rating: number = 5;
    cropWidth: number = 75;

    @Output() notify :EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * (75/5);
    }
}