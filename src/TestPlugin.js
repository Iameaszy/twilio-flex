import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CustomTaskListComponent from './CustomTaskListComponent';
import Contact from './contacts/contact';
const PLUGIN_NAME = 'ContactPlugin';
console.log(process.env, 'ppppppp');
export default class ContactPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    flex.AgentDesktopView.Content.replace(<Contact key="demo-component" />, {
      sortOrder: -1,
    });
  }
}
