<template>
    <b-container>
        <b-row>
            <b-col>
                <h1>Depunctuator</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col><h2>Type here!</h2></b-col>
            <b-col><h2>Result here!</h2></b-col>
        </b-row>
        <b-row>
            <b-col>
                <textarea v-model="usertext" rows="10" cols="60" ></textarea>
            </b-col>
            <b-col>
                <article class="shadow p-3 mb-5 bg-white rounded">
                <p v-for="(para, index) in strippedText.split('\n\n')" :key="index">{{para}}</p>
                </article>
            </b-col>
        </b-row>
        <b-row>
            <footer>
                <p class="text-muted credit">Copyright 2019 - Andrew Watts&nbsp;<a href="https://github.com/awatts/depunctuator"><font-awesome-icon :icon="['fab', 'github']" ></font-awesome-icon></a></p>
            </footer>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'Depunctuator',
  data: function() {
      return {
    usertext: `The unanimous Declaration of the thirteen united States of America

When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.

We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. — That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, — That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn that mankind are more disposed to suffer, while evils are sufferable than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security. — Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.`
    }
  },
  computed: {
    strippedText: function() {
        return this.usertext.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-\?_'"`~()@—]/g,"");
    }
  }
}
</script>

<style scoped>

textarea {
  padding: 1em;
  min-height: 90%;
}

article {
  padding: 1em;
}

p {
  margin-bottom: 1em;
}

a {
  color: black;
}

a:active {
  color: gray;
}

a:visited {
  color: black;
}
</style>