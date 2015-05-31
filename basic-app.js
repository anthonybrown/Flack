Comments = new Mongo.Collection('comments');

if (Meteor.isClient) {
  Template.CommentList.helpers({
    comments: function () {
      return Comments.find();
    }
  });

  Template.CommentAdd.events({
    'submit form': function (e, tmpl) {
      e.preventDefault();

      var formEl    = tmpl.find('form');
      var commentEl = tmpl.find('[name = comment]');
      var comment   = commentEl.value;

      /* TEST THE EVENT HANDLER IS WORKING*/
      //console.log(comment);
      //return;

      Comments.insert({
        login     : 'tBrown',
        timestamp : new Date,
        room      : 'master',
        comment   : comment
      });

      formEl.reset();
    }
  });
}

if (Meteor.isServer) {
}
