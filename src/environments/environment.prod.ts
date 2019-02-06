import * as Config from '../../config';

export const environment = {
  production: true,
  firebase: {
    apiKey: Config.config.MY_KEY,
    projectId: Config.config.PROJECT_ID,
  }
};
