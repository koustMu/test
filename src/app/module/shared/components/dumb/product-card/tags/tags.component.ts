import {Component, Input, OnInit} from '@angular/core';
import {TagResource, TagType} from '../../../../../core/api/SearchResponse';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() tags: TagResource[];
  tagType = TagType;

  constructor() { }

  ngOnInit(): void {
  }

}
