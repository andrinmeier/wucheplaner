package org.acme;

import com.google.protobuf.ByteString;

import io.quarkus.grpc.GrpcService;
import io.smallrye.mutiny.Uni;

@GrpcService
public final class WeeklyPlanerService implements WeeklyPlaner {

    @Override
    public Uni<WeeklyPlanReply> createWeeklyPlan(WeeklyPlanRequest request) {
        return Uni.createFrom().item(() ->
                WeeklyPlanReply.newBuilder().setReport(ByteString.copyFrom("abc".getBytes())).build()
        );
    }
}