export default class MixinBuilder {
  constructor(superclass) {
    this.superclass = superclass || class {};
  }
  with(...mixins) {
    return mixins.reduce((mixedClass, mixin) => mixin(mixedClass), this.superclass);
  }
};