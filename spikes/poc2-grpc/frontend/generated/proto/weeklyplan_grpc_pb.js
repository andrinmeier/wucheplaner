// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var weeklyplan_pb = require('./weeklyplan_pb.js');

function serialize_org_acme_WeeklyPlanReply(arg) {
  if (!(arg instanceof weeklyplan_pb.WeeklyPlanReply)) {
    throw new Error('Expected argument of type org.acme.WeeklyPlanReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_acme_WeeklyPlanReply(buffer_arg) {
  return weeklyplan_pb.WeeklyPlanReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_acme_WeeklyPlanRequest(arg) {
  if (!(arg instanceof weeklyplan_pb.WeeklyPlanRequest)) {
    throw new Error('Expected argument of type org.acme.WeeklyPlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_acme_WeeklyPlanRequest(buffer_arg) {
  return weeklyplan_pb.WeeklyPlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var WeeklyPlanerService = exports.WeeklyPlanerService = {
  createWeeklyPlan: {
    path: '/org.acme.WeeklyPlaner/createWeeklyPlan',
    requestStream: false,
    responseStream: false,
    requestType: weeklyplan_pb.WeeklyPlanRequest,
    responseType: weeklyplan_pb.WeeklyPlanReply,
    requestSerialize: serialize_org_acme_WeeklyPlanRequest,
    requestDeserialize: deserialize_org_acme_WeeklyPlanRequest,
    responseSerialize: serialize_org_acme_WeeklyPlanReply,
    responseDeserialize: deserialize_org_acme_WeeklyPlanReply,
  },
};

exports.WeeklyPlanerClient = grpc.makeGenericClientConstructor(WeeklyPlanerService);
