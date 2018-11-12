import blogPost from '@/blogPost.js'

export default {
  Posts: [
    new blogPost(1, 'Essentials Esmhentials', 'Brett Campbell', '11/09/2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [new Comment(1, 'Brett Campbell', 'Wow this stuff is difficult!'), new Comment(2, 'Sara Farmer', 'I think I agree!')]),

    new blogPost(2, 'Duallys', 'Brett Campbell', '11/08/2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [new Comment(1, 'Brett Campbell', 'Wow this stuff is difficult!'), new Comment(2, 'Sara Farmer', 'I think I agree!')]),

    new blogPost(3, 'Workflow Frenzy', 'Brett Campbell', '11/07/2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [new Comment(1, 'Brett Campbell', 'Wow this stuff is difficult!'), new Comment(2, 'Sara Farmer', 'I think I agree!')])
  ]
}
