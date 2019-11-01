import {ref , reactive, toRefs} from '@vue/composition-api'

// what ref does is it makes your variable reactive that you can use inside your template
// reactive is Takes an object and returns a reactive proxy of the original.
export default function(){
    const val = ref('')
    const breweries = reactive({list: []});
    
    const submitted = async () => {
                      const response = await fetch(`https://api.openbrewerydb.org/breweries/?by_name=${val.value}`);
                      const json = await response.json();
                      breweries.list = json;
                   };

    return {val, ...toRefs(breweries), submitted};
}