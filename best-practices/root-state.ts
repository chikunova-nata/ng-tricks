import { MyFeatureStoreState } from './my-feature-store';
import { MyOtherFeatureStoreState } from './my-other-feature-store';

export interface State {
  myFeature: MyFeatureStoreState.State;
  myOtherFeature: MyOtherFeatureStoreState.State;
}