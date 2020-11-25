import { RecipeNamePipe } from './recipe-name.pipe';

describe('RecipeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new RecipeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
