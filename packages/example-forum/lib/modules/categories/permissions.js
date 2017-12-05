/*

Categories permissions

*/

import Users from 'meteor/vulcan:users';

const guestsActions = [
  'categories.view'
];
Users.groups.guests.can(guestsActions);

const membersActions = [
  'categories.view',
  'categories.new',
  'categories.edit.own',
  'categories.remove.own'
];
Users.groups.members.can(membersActions);

const adminActions = [
  'categories.view',
  'categories.new',
  'categories.edit.all',
  'categories.remove.all'
];
Users.groups.admins.can(adminActions);
