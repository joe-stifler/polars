window.SIDEBAR_ITEMS = {"constant":["IDX_DTYPE","NULL"],"enum":["AggExpr","AnyValue","ArrowDataType","ArrowTimeUnit","AsofStrategy","BooleanFunction","CategoricalOrdering","ClosedWindow","CsvEncoding","DataType","Excluded","Expr","FillNullStrategy","FunctionExpr","GroupByMethod","GroupsIndicator","GroupsProxy","IndexOrder","InterpolationMethod","IpcCompression","JoinType","JsonFormat","LiteralValue","LogicalPlan","NullValues","Operator","ParallelStrategy","ParquetCompression","PolarsError","QuantileInterpolOptions","QuoteStyle","RankMethod","RevMapping","RevMappingBuilder","SearchSortedSide","StartBy","TakeIdx","TakeRandBranch3","TimeUnit","UniqueKeepStrategy","WindowMapping"],"fn":["all","all_horizontal","any_horizontal","apply_binary","apply_multiple","arange","arg_sort_by","arg_where","as_struct","avg","base_utc_offset","binary_expr","cast","coalesce","col","collect_all","cols","concat","concat_expr","concat_list","concat_str","count","cov","cumfold_exprs","cumreduce_exprs","date_ranges","datetime","datetime_range","datetime_ranges","datetime_to_timestamp_ms","datetime_to_timestamp_ns","datetime_to_timestamp_us","diag_concat_lf","dst_offset","dtype_col","dtype_cols","duration","first","floor_div_series","fmt_group_by_column","fold_exprs","format_str","group_by_values","group_by_windows","in_nanoseconds_window","indexes_to_usizes","int_range","int_ranges","interpolate","is_first_distinct","is_in","is_last_distinct","is_not_null","is_null","last","lit","map_binary","map_list_multiple","map_multiple","max","max_horizontal","mean","median","merge_dtypes","min","min_horizontal","not","pearson_corr","quantile","reduce_exprs","repeat","replace_time_zone","resolve_homedir","rolling_corr","rolling_cov","search_sorted","spearman_rank_corr","sum","sum_horizontal","ternary_expr","time_ranges","unix_time","when"],"macro":["df","polars_bail","polars_ensure","polars_err","polars_warn"],"mod":["aggregations","arity","array","arrow_ndjson","binary","cat","chunkedarray","cloud","datatypes","datetime","default_arrays","dt","expr","fixed_size_list","full","json","names","nan_propagating_aggregate","null","predicates","read_impl","series","slice","sort","string","utils","zip"],"struct":["AggregationContext","AnonymousScanOptions","Arc","ArrayNameSpace","ArrowField","ArrowSchema","AsOfOptions","BatchedParquetReader","BinaryChunkedBuilder","BinaryType","BooleanChunkedBuilder","BooleanType","Bounds","BoundsIter","BrotliLevel","CatIter","CategoricalChunked","CategoricalChunkedBuilder","CategoricalNameSpace","CategoricalType","ChainedThen","ChainedWhen","ChunkedArray","CsvReader","CsvWriter","CsvWriterOptions","DataFrame","DateType","DatetimeArgs","DatetimeType","DecimalType","Duration","DurationArgs","DurationType","DynamicGroupOptions","Field","FieldsMapper","FixedSizeListType","Float32Type","Float64Type","GroupBy","GroupsIdx","GroupsProxyIter","GroupsProxyParIter","GzipLevel","Int128Type","Int16Type","Int32Type","Int64Type","Int8Type","IpcReader","IpcStreamReader","IpcStreamWriter","IpcStreamWriterOption","IpcWriter","IpcWriterOption","IpcWriterOptions","JoinArgs","JoinBuilder","JoinOptions","JsonLineReader","JsonReader","JsonWriter","LazyCsvReader","LazyFrame","LazyGroupBy","LazyJsonLineReader","ListBinaryChunkedBuilder","ListBooleanChunkedBuilder","ListNameSpace","ListPrimitiveChunkedBuilder","ListType","ListUtf8ChunkedBuilder","Logical","MeltArgs","MetaNameSpace","NoNull","Null","ObjectType","OptState","OwnedObject","ParquetReader","ParquetWriteOptions","ParquetWriter","PhysicalIoHelper","PrimitiveChunkedBuilder","RankOptions","RollingCovOptions","RollingGroupOptions","RollingOptions","RollingOptionsFixedWindow","RollingOptionsImpl","RollingQuantileParams","RollingVarParams","ScanArgsAnonymous","ScanArgsIpc","ScanArgsParquet","Schema","SerializeOptions","Series","SlicedGroups","SortMultipleOptions","SortOptions","SpecialEq","StrHashLocal","StrptimeOptions","StructArray","StructChunked","StructNameSpace","TakeRandomArray","TakeRandomArrayValues","TakeRandomChunked","Then","TimeType","TruncateOptions","UInt16Type","UInt32Type","UInt64Type","UInt8Type","UnionArgs","Utf8ChunkedBuilder","Utf8Type","When","Window","WindowOptions","ZstdLevel"],"trait":["AnonymousScan","ArgAgg","ArrayCollectIterExt","ArrayFromIter","ArrayFromIterDtype","AsBinary","AsList","AsRefDataType","AsUtf8","BinaryNameSpaceImpl","BinaryUdfOutputField","ChunkAgg","ChunkAggSeries","ChunkAnyValue","ChunkApply","ChunkApplyKernel","ChunkBytes","ChunkCast","ChunkCompare","ChunkCumAgg","ChunkExpandAtIndex","ChunkExplode","ChunkFillNullValue","ChunkFilter","ChunkFull","ChunkFullNull","ChunkPeaks","ChunkQuantile","ChunkReverse","ChunkRollApply","ChunkSet","ChunkShift","ChunkShiftFill","ChunkSort","ChunkTake","ChunkTakeUnchecked","ChunkUnique","ChunkVar","ChunkZip","ChunkedBuilder","ChunkedCollectInferIterExt","ChunkedCollectIterExt","ChunkedSet","DataFrameJoinOps","DataFrameOps","DateMethods","DatetimeMethods","DurationMethods","ExprEvalExtension","FromData","FromDataBinary","FromDataUtf8","FunctionOutputField","FxHash","GetAnyValue","IndexOfSchema","IndexToUsize","InitHashMaps","IntoGroupsProxy","IntoLazy","IntoListNameSpace","IntoSeries","IntoTakeRandom","IntoVec","IsFirstDistinct","IsFloat","IsLastDistinct","LazyFileListReader","LhsNumOps","ListBuilderTrait","ListFromIter","ListNameSpaceExtension","ListNameSpaceImpl","Literal","LogSeries","LogicalType","MutableBitmapExtension","NamedFrom","NamedFromOwned","NewChunkedArray","NumOpsDispatch","NumOpsDispatchChecked","NumericNative","PartitionedAggregation","PhysicalExpr","PolarsArray","PolarsDataType","PolarsFloatType","PolarsIntegerType","PolarsIterator","PolarsMonthEnd","PolarsMonthStart","PolarsNumericType","PolarsObject","PolarsRound","PolarsTemporalGroupby","PolarsTruncate","PolarsUpsample","QuantileAggSeries","Reinterpret","RenameAliasFn","RepeatBy","RollingAgg","RollingSeries","SerReader","SerWriter","SeriesBinaryUdf","SeriesMethods","SeriesOpsTime","SeriesSealed","SeriesTrait","SeriesUdf","SlicedArray","StaticArray","StrConcat","TakeIterator","TakeIteratorNulls","TakeRandom","TakeRandomUtf8","TemporalMethods","TimeMethods","ToDummies","UdfSchema","Utf8Methods","Utf8NameSpaceImpl","ValueSize","VarAggSeries","VecHash"],"type":["AllowedOptimizations","ArrayChunked","ArrayRef","ArrowResult","BinaryChunked","BooleanChunked","BorrowIdxItem","ChunkId","CloudOptions","DateChunked","DatetimeChunked","DecimalChunked","Dummy","DurationChunked","DynArgs","FillNullLimit","Float32Chunked","Float64Chunked","GetOutput","GlobIterator","GroupsSlice","IdxArr","IdxCa","IdxItem","IdxSize","IdxType","Int128Chunked","Int16Chunked","Int32Chunked","Int64Chunked","Int8Chunked","LargeBinaryArray","LargeListArray","LargeStringArray","ListChunked","ObjectChunked","PlHashMap","PlHashSet","PlIdHashMap","PlIndexMap","PlIndexSet","PolarsResult","SchemaRef","TimeChunked","TimeZone","UInt16Chunked","UInt32Chunked","UInt64Chunked","UInt8Chunked","Utf8Chunked"]};