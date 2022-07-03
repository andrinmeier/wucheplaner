// package: org.acme
// file: weeklyplan.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as weeklyplan_pb from "./weeklyplan_pb";

interface IWeeklyPlanerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createWeeklyPlan: IWeeklyPlanerService_IcreateWeeklyPlan;
}

interface IWeeklyPlanerService_IcreateWeeklyPlan extends grpc.MethodDefinition<weeklyplan_pb.WeeklyPlanRequest, weeklyplan_pb.WeeklyPlanReply> {
    path: "/org.acme.WeeklyPlaner/createWeeklyPlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<weeklyplan_pb.WeeklyPlanRequest>;
    requestDeserialize: grpc.deserialize<weeklyplan_pb.WeeklyPlanRequest>;
    responseSerialize: grpc.serialize<weeklyplan_pb.WeeklyPlanReply>;
    responseDeserialize: grpc.deserialize<weeklyplan_pb.WeeklyPlanReply>;
}

export const WeeklyPlanerService: IWeeklyPlanerService;

export interface IWeeklyPlanerServer extends grpc.UntypedServiceImplementation {
    createWeeklyPlan: grpc.handleUnaryCall<weeklyplan_pb.WeeklyPlanRequest, weeklyplan_pb.WeeklyPlanReply>;
}

export interface IWeeklyPlanerClient {
    createWeeklyPlan(request: weeklyplan_pb.WeeklyPlanRequest, callback: (error: grpc.ServiceError | null, response: weeklyplan_pb.WeeklyPlanReply) => void): grpc.ClientUnaryCall;
    createWeeklyPlan(request: weeklyplan_pb.WeeklyPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: weeklyplan_pb.WeeklyPlanReply) => void): grpc.ClientUnaryCall;
    createWeeklyPlan(request: weeklyplan_pb.WeeklyPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: weeklyplan_pb.WeeklyPlanReply) => void): grpc.ClientUnaryCall;
}

export class WeeklyPlanerClient extends grpc.Client implements IWeeklyPlanerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createWeeklyPlan(request: weeklyplan_pb.WeeklyPlanRequest, callback: (error: grpc.ServiceError | null, response: weeklyplan_pb.WeeklyPlanReply) => void): grpc.ClientUnaryCall;
    public createWeeklyPlan(request: weeklyplan_pb.WeeklyPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: weeklyplan_pb.WeeklyPlanReply) => void): grpc.ClientUnaryCall;
    public createWeeklyPlan(request: weeklyplan_pb.WeeklyPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: weeklyplan_pb.WeeklyPlanReply) => void): grpc.ClientUnaryCall;
}
