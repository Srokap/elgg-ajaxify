<?php 
/**
 * 
 */

echo elgg_view('script', array('js' => 'ajaxify'));     
?>
<script type="text/javascript">
/**
 * Don't want to cache these -- they could change for every request
 */
elgg.config.lastcache = <?php echo (int)$vars['config']->lastcache.''; ?>;

elgg.security.token.__elgg_ts = <?php echo $ts = time(); ?>;
elgg.security.token.__elgg_token = '<?php echo generate_action_token($ts); ?>';

elgg.page_owner_guid = <?php echo page_owner(); ?>;
</script>