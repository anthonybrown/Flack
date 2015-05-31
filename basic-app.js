Comments = new Mongo.Collection('comments');

if (Meteor.isClient) {
  Template.CommentList.helpers({
    comments: function () {
      return Comments.find();
    }
  });
}

if (Meteor.isServer) {
}
