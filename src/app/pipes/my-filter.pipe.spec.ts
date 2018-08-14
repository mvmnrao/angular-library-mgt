import { MyFilterPipe } from './my-filter.pipe';

describe('FilterPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
