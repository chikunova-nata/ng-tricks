import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './effects/movie.effects';

@NgModule({
  imports: [
    ...
    EffectsModule.forRoot([MovieEffects])
  ]
})
export class AppModule {}