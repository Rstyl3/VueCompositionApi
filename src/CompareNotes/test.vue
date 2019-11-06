<script>
export default {
    data() {
      return {
        val: '',
        breweries: [],
      };
    },
    methods: {
      async submitted() {
        const response = await fetch(`https://api.openbrewerydb.org/breweries/?by_name=${this.val}`);
        const json = await response.json();
        this.breweries = json
      },
    },
}
</script>

<script>
import {ref , reactive, toRefs} from '@vue/composition-api'

export default {
  setup() {
    const val = ref('')
    const breweries = reactive({list: []});    
    const submitted = async () => {
                      const response = await fetch(`https://api.openbrewerydb.org/breweries/?by_name=${val.value}`);
                      const json = await response.json();
                      breweries.list = json;
                   };
    return {val, ...toRefs(breweries), submitted};
  },
};
</script>