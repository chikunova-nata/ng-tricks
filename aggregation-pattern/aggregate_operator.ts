export type AggregatableAction = Action & { correlationParams?: CorrelationParams };

export type FailActionForAggregation = Action & { error?: Error, correlationParams?: CorrelationParams };

export function aggregate<T extends AggregatableAction,
    TAction1 extends AggregatableAction,
    TAction2 extends AggregatableAction,
    TFailAction extends FailActionForAggregation>
(
    action1$: Observable<TAction1>,
    action2$: Observable<TAction2>,
    failAction$: Observable<TFailAction>
): OperatorFunction<T, [TAction1, TAction2]> {

    const filterAction = (sourceAction: AggregatableAction, t: AggregatableAction) =>
        t.correlationParams && sourceAction.correlationParams &&
        t.correlationParams.correlationId === sourceAction.correlationParams.correlationId &&
        t.correlationParams.parentActionType === sourceAction.type;

    const getAggregatedActions = (sourceAction: AggregatableAction): Observable<[TAction1, TAction2]> => {
        let a1$ = action1$
            .pipe(
                filter(a => {
                    return filterAction(sourceAction, a);
                }),
                first()
            );
        let a2$ = action2$
            .pipe(
                filter(a => {
                    return filterAction(sourceAction, a);
                }),
                first()
            );

        let f$ = failAction$
            .pipe(
                filter(a => {
                    return filterAction(sourceAction, a);
                }),
                first(),
                switchMap(b => {
                    return Observable.throw(b.error);
                })
            );

        return race(forkJoin([a1$, a2$]), f$);
    };

    return (source: Observable<AggregatableAction>) => source.pipe(
        switchMap(sourceAction => getAggregatedActions(sourceAction))
    );
}