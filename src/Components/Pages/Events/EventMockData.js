
function GetData(assignData){
    const data = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Position',
            field: 'position',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Office',
            field: 'office',
            sort: 'asc',
            width: 200,
          }
        ],
        rows: [
          {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            clickEvent: () => assignData({
                name:"Tiger Nixon",
                owner:"System Architect",
                startDate:"20/1/2020",
                endDate:"20/1/2020",
                location:"Dublin",
                email:"tiger@tiger.com",
                phone: "0876767676",
                comment:"Paris",
                lat: 48.8713,
                lng:2.3551
          
            })
          },{
            name: 'James Murphy',
            position: 'Messer',
            office: 'Dublin',
            clickEvent: () => assignData({
                name:"Dublin marathon",
                owner:"James L Murphy",
                startDate:"20/1/2020",
                endDate:'20/1/2020',
                location:"Dublin",
                email:'james@james.com',
                phone: '0876767676',
                comment:"RDS",
                lat: 53.3279,
                lng:-6.2286
            })
          },{
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            clickEvent: () => assignData({
                name:"Tiger Nixon",
                owner:"System Architect",
                startDate:"20/1/2020",
                endDate:"20/1/2020",
                location:"Dublin",
                email:"tiger@tiger.com",
                phone: "0876767676",
                comment:"Paris",
                lat: 48.8713,
                lng:2.3551
          
            })
          },{
            name: 'James Murphy',
            position: 'Messer',
            office: 'Dublin',
            clickEvent: () => assignData({
                name:"Dublin marathon",
                owner:"James L Murphy",
                startDate:"20/1/2020",
                endDate:'20/1/2020',
                location:"Dublin",
                email:'james@james.com',
                phone: '0876767676',
                comment:"RDS",
                lat: 53.3279,
                lng:-6.2286
            })
          },{
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            clickEvent: () => assignData({
                name:"Tiger Nixon",
                owner:"System Architect",
                startDate:"20/1/2020",
                endDate:"20/1/2020",
                location:"Dublin",
                email:"tiger@tiger.com",
                phone: "0876767676",
                comment:"Paris",
                lat: 48.8713,
                lng:2.3551 
            })
          },{
            name: 'James Murphy',
            position: 'Messer',
            office: 'Dublin',
            clickEvent: () => assignData({
                name:"Dublin marathon",
                owner:"James L Murphy",
                startDate:"20/1/2020",
                endDate:'20/1/2020',
                location:"Dublin",
                email:'james@james.com',
                phone: '0876767676',
                comment:"RDS",
                lat: 53.3279,
                lng:-6.2286
            })
          },
        ]
      };

      return data;
}

export default GetData;