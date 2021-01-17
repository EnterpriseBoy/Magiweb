
function StaffMockData(assignData){
    const data = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 250,
          },
          {
            label: 'Rating',
            field: 'rating',
            sort: 'asc',
            width: 250
          },
          {
            label: 'Locate',
            field: 'locate',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Call',
            field: 'calls',
            sort: 'asc',
            width: 100,
          }
        ],
        rows: [
          {
            name: 'Tiddlie Widdly',
            rating: '*****',
            locate: 'yes',
            call: 'yes',
          }, {
            name: 'Messer Murphy',
            rating: '*****',
            locate: 'yes',
            call: 'yes',
          }
        ]
      };

      return data;
}

export default StaffMockData;