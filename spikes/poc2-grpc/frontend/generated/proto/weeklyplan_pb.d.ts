// package: org.acme
// file: weeklyplan.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class WeeklyPlanRequest extends jspb.Message { 
    clearSchoolClassesList(): void;
    getSchoolClassesList(): Array<string>;
    setSchoolClassesList(value: Array<string>): WeeklyPlanRequest;
    addSchoolClasses(value: string, index?: number): string;
    getWeekFrom(): string;
    setWeekFrom(value: string): WeeklyPlanRequest;
    getWeekTo(): string;
    setWeekTo(value: string): WeeklyPlanRequest;
    clearTasksList(): void;
    getTasksList(): Array<Task>;
    setTasksList(value: Array<Task>): WeeklyPlanRequest;
    addTasks(value?: Task, index?: number): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WeeklyPlanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WeeklyPlanRequest): WeeklyPlanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WeeklyPlanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WeeklyPlanRequest;
    static deserializeBinaryFromReader(message: WeeklyPlanRequest, reader: jspb.BinaryReader): WeeklyPlanRequest;
}

export namespace WeeklyPlanRequest {
    export type AsObject = {
        schoolClassesList: Array<string>,
        weekFrom: string,
        weekTo: string,
        tasksList: Array<Task.AsObject>,
    }
}

export class Task extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Task;
    getDescription(): string;
    setDescription(value: string): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        subject: string,
        description: string,
    }
}

export class WeeklyPlanReply extends jspb.Message { 
    getReport(): Uint8Array | string;
    getReport_asU8(): Uint8Array;
    getReport_asB64(): string;
    setReport(value: Uint8Array | string): WeeklyPlanReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WeeklyPlanReply.AsObject;
    static toObject(includeInstance: boolean, msg: WeeklyPlanReply): WeeklyPlanReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WeeklyPlanReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WeeklyPlanReply;
    static deserializeBinaryFromReader(message: WeeklyPlanReply, reader: jspb.BinaryReader): WeeklyPlanReply;
}

export namespace WeeklyPlanReply {
    export type AsObject = {
        report: Uint8Array | string,
    }
}
