import * as Config from '../../config';

export const environment = {
  production: false,
  firebase: {
    apiKey: Config.config.MY_KEY,
    projectId: Config.config.PROJECT_ID,
  }
};