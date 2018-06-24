import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MyFeatureStoreModule } from './my-feature-store/';
import { MyOtherFeatureStoreModule } from './my-other-feature-store/';

@NgModule({
  imports: [
    CommonModule,
    MyFeatureStoreModule,
    MyOtherFeatureStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule {}