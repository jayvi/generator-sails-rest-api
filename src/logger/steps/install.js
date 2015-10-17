/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = {
  bunyan: ['sails-hook-bunyan'],
  winston: ['sails-hook-winston']
};

export default function () {
  let logger = this.options['logger'];

  if (DEPENDENCIES[logger]) {
    this.npmInstall(DEPENDENCIES[logger], {save: true});
  }
};
