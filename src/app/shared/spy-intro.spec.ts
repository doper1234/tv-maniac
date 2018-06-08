describe('using spies', () => {
  it('checks if a method is being run', () => {
    const service = {
      doSomething: jasmine.createSpy('doSomething()')
    };
    service.doSomething();
    expect(service.doSomething).toHaveBeenCalled();
  });

  it('checks if several methods are being run', () => {
    const service = jasmine.createSpyObj(['doA', 'doB', 'doC']);

    ['A', 'B', 'C'].forEach(letter => service['do' + letter]());
    // the same as
    /*service.doA();
    service.doB();
    service.doC();*/

    expect(service.doA).toHaveBeenCalled();
    expect(service.doB).toHaveBeenCalled();
    expect(service.doC).toHaveBeenCalled();
  });

  it('checks if a method is being run twice', () => {
    const service = {
      doSomething: jasmine.createSpy('doSomething()')
    };
    service.doSomething();
    service.doSomething();
    expect(service.doSomething).toHaveBeenCalledTimes(2);
  });

  it('checks if a method is being run and returns objets instance', () => {
    const service = {
      doSomething: jasmine.createSpy('doSomething()').and.returnValue(199)
    };
    const result = service.doSomething(200);

    expect(result).toEqual(199);
    expect(service.doSomething).toHaveBeenCalled();
    expect(service.doSomething).toHaveBeenCalled();
  });
});
