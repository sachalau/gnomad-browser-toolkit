export const tableConfig = (onHeaderClick) => ({
  fields: [

    // {
    //   dataKey: 'chr',
    //   title: 'Chrom',
    //   dataType: 'integer',
    //   width: 20,
    //   onHeaderClick,
    // },
    // {
    //   dataKey: 'pos',
    //   title: 'Position',
    //   dataType: 'integer',
    //   width: 80,
    //   onHeaderClick,
    // },
    // {
    //   dataKey: 'ref',
    //   title: 'Ref',
    //   dataType: 'string',
    //   width: 20,
    //   onHeaderClick,
    // },
    // {
    //   dataKey: 'alt',
    //   title: 'Alt',
    //   dataType: 'string',
    //   width: 20,
    //   onHeaderClick,
    // },
    {
      dataKey: 'variant_id',
      title: 'Variant Id',
      dataType: 'variantId',
      width: 120,
      onHeaderClick,
    },
    {
      dataKey: 'n_study',
      title: 'nStudy',
      dataType: 'integer',
      width: 40,
      onHeaderClick,
    },
    {
      dataKey: 'study',
      title: 'Study',
      dataType: 'string',
      width: 40,
      onHeaderClick,
    },
    {
      dataKey: 'p_value',
      title: 'p-value',
      dataType: 'float',
      width: 50,
      onHeaderClick,
    },
    {
      dataKey: 'scz_af',
      title: 'SCZ AF',
      dataType: 'float',
      width: 50,
      onHeaderClick,
    },
    {
      dataKey: 'hc_af',
      title: 'HC AF',
      dataType: 'float',
      width: 50,
      onHeaderClick,
    },
    {
      dataKey: 'odds_ratio',
      title: 'OR',
      dataType: 'float',
      width: 40,
      onHeaderClick,
    },
    {
      dataKey: 'se',
      title: 'SE',
      dataType: 'float',
      width: 40,
      onHeaderClick,
    },
    {
      dataKey: 'qp',
      title: 'Qp',
      dataType: 'float',
      width: 40,
      onHeaderClick,
    },
    {
      dataKey: 'i_squared',
      title: 'I2',
      dataType: 'float',
      width: 40,
      onHeaderClick,
    },
    // {
    //   dataKey: 'comment',
    //   title: 'Comment',
    //   dataType: 'string',
    //   width: 40,
    //   onHeaderClick,
    // },
  ],
})
