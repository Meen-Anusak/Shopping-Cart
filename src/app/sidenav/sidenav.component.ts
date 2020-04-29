import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit ,OnDestroy {

  mobileQueryMax : MediaQueryList ;
  private mobileQueryListener : () => void ;

  constructor(
    private changeDetectorRef : ChangeDetectorRef,
    private media : MediaMatcher,
  ){
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQueryMax = media.matchMedia('( Max-width: 600px )');
    this.mobileQueryMax.addListener(this.mobileQueryListener)
  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.mobileQueryMax.removeListener(this.mobileQueryListener);
  }


}
